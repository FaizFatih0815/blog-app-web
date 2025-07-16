import * as Yup from "yup";

export const CreateBlogSchema = Yup.object().shape({
  title: Yup.string().required("Title is requeired"),
  category: Yup.string().required("Category is requeired"),
  description: Yup.string().required("Description is requeired"),
  content: Yup.string().required("Content is requeired"),
});
