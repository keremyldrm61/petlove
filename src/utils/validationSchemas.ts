import * as yup from "yup";

// Noktaların "herhangi bir karakter" olarak algılanmaması için \. şeklinde escape edildi
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const urlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
const phoneRegExp = /^\+38\d{10}$/;

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(emailRegExp, "Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegExp, "Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

// Profil güncelleme şeması
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(emailRegExp, "Enter a valid Email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone format (Must be +38...)")
    .notRequired(),
  avatar: yup
    .string()
    .matches(urlRegExp, "Invalid image URL format")
    .notRequired(),
});

// Evcil hayvan ekleme şeması
export const addPetSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgURL: yup
    .string()
    .matches(urlRegExp, "Invalid image URL format")
    .required("Image URL is required"),
  species: yup.string().required("Species is required"),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Format must be YYYY-MM-DD")
    .required("Birthday is required"),
  sex: yup.string().required("Sex is required"),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
export type LoginFormValues = yup.InferType<typeof loginSchema>;
export type ProfileFormValues = yup.InferType<typeof schema>;
export type AddPetFormValues = yup.InferType<typeof addPetSchema>;
