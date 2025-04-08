import { MdClose } from "react-icons/md";
import ImageUploader from "./uploader";
import PostDescription from "./desc";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function CreatePostModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <Formik
        initialValues={{
          caption: "",
          image: null as File | null,
        }}
        validationSchema={Yup.object({
          image: Yup.mixed().required(),
        })}
        onSubmit={(values) => {
          console.log("Postingan:", values);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[600px] flex flex-col relative">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-gray-600 hover:text-black"
              >
                <MdClose size={22} />
              </button>

              <h2 className="font-semibold text-base">Buat postingan baru</h2>

              <button
                type="submit"
                disabled={!values.image}
                className={`font-semibold ${
                  values.image
                    ? "text-blue-500"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Bagikan
              </button>
            </div>

            <div className="flex h-full max-sm:flex-col items-center justify-center">
              <div className="flex flex-3/5 sm:h-full w-full">
                <ImageUploader
                  onChange={(file) => setFieldValue("image", file)}
                />
              </div>
              <div className="flex flex-2/5 sm:h-full w-full">
                <PostDescription
                  onChange={(text) => setFieldValue("caption", text)}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
