"use client";

import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import axios from "@/libs/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .min(6, "min 6 character")
    .required("password is required"),
});

interface ILoginForm {
  email: string;
  password: string;
}

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues: ILoginForm = {
    email: "",
    password: "",
  };

  const onLogin = async (
    value: ILoginForm,
    action: FormikHelpers<ILoginForm>
  ) => {
    try {
      const res = await axios.get(
        `/data/user?where=%60email%60%20%3D%20'${value.email}'%20AND%20%60password%60%20%3D%20'${value.password}'`
      );
      if (res.data?.length == 0) throw "Incorrect Email or Password !";
      dispatch(
        login({
          objectId: res.data[0].objectId,
          username: res.data[0].username,
          email: res.data[0].email,
        })
      );
      action.resetForm();
      toast.success("Login Success !");
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error(err as string);
    }
  };

  return (
    <div className="mt-16">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onLogin}
      >
        {(props: FormikProps<ILoginForm>) => {
          const { touched, errors, isSubmitting } = props;
          return (
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-md">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="mt-2 mb-1 p-2 border border-gray-500 rounded-md shadow-md"
                />
                {touched.email && errors.email ? (
                  <div className="text-red-500 text-[12px]">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="mt-2 mb-1 p-2 pr-10 border border-gray-500 rounded-md shadow-md w-full"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </button>
                </div>
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-[12px]">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col md:flex-row mt-12 md:items-center">
                <button
                  className="w-20 text-white py-1 px-2 rounded-md bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading" : "Sign In"}
                </button>
                <p className="text-sm md:ml-6 mt-2 md:mt-0">
                  Create new account ?{" "}
                  <Link href={"/register"} className="text-gray-600 font-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
