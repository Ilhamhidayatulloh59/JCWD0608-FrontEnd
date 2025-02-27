"use client";

import { tagRevalidate } from "@/app/action";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { IoMdAdd } from "react-icons/io";
import * as yup from "yup";

const TodoSchema = yup.object().shape({
  desc: yup.string().required("desc is required"),
});

interface ITodoForm {
  desc: string;
}

interface IProps {
  onReload: () => void;
}

export default function TodoForm({ onReload }: IProps) {
  const initialValues: ITodoForm = { desc: "" };

  const addTodo = async (
    values: ITodoForm,
    action: FormikHelpers<ITodoForm>
  ) => {
    try {
      await axios.post(
        "https://snazzyfoot-us.backendless.app/api/data/todo",
        values
      );
      action.resetForm();
      tagRevalidate("todo");
      onReload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={TodoSchema}
        onSubmit={addTodo}
      >
        {(props: FormikProps<ITodoForm>) => {
          const { errors, touched } = props;
          return (
            <Form>
              <div className="flex bg-orange-300 dark:bg-gray-300">
                <div className="w-full">
                  <Field
                    name="desc"
                    className="w-full p-4 text-xl outline-none bg-orange-300 dark:bg-gray-300 focus:border-none focus:ring-0"
                    placeholder="Add a new task here..."
                  />
                  {touched.desc && errors.desc ? (
                    <div className="text-red-500 text-[12px] ml-4">
                      {errors.desc}
                    </div>
                  ) : null}
                </div>
                <button type="submit" className="p-4 text-xl font-extrabold">
                  <IoMdAdd />
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
