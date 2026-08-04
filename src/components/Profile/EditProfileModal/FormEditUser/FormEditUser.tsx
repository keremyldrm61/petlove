import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../redux/store";
import { useAuth } from "../../../../hooks/useAuth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  profileSchema,
  type ProfileFormValues,
} from "../../../../utils/validationSchemas";
import { editUser } from "../../../../redux/auth/authOperations";
import { Icon } from "../../../../shared/Icon";
import css from "./FormEditUser.module.css";

interface FormEditUserProps {
  setImageURL: (url: string) => void;
  setShowEditForm: (show: boolean) => void;
}

export interface EditUserFormValues {
  avatar?: string;
  name: string;
  email: string;
  phone?: string;
}

const FormEditUser = ({ setImageURL, setShowEditForm }: FormEditUserProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAuth();

  const preset_key = import.meta.env.VITE_PRESET_KEY || "";
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL || "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    dispatch(editUser(data));
    setShowEditForm(false);
  };

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    fetch(cloudURL, { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed");
        }
        return res.json();
      })
      .then((data) => setValue("avatar", data.secure_url))
      .catch((error) => console.error("Upload error:", error.message));

    const fileURL = URL.createObjectURL(file);
    setImageURL(fileURL);
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.avatarInputRow}>
        <label>
          <input
            className={css.inputAvatarURL}
            type="text"
            {...register("avatar")}
            defaultValue={user?.avatar || "Avatar URL"}
          />
          <p className={css.errorMsg}>{errors.avatar?.message}</p>
        </label>
        <label className={css.label}>
          <input
            className={css.addAvatarInput}
            type="file"
            name="avatarFile"
            onChange={handleUploadAvatar}
          />
          <Icon id="icon-upload-cloud" width={18} height={18} />
        </label>
      </div>

      <input
        className={css.inputStandard}
        type="text"
        {...register("name")}
        defaultValue={user?.name || ""}
      />
      <p className={css.errorMsg}>{errors.name?.message}</p>

      <input
        className={css.inputStandard}
        type="email"
        {...register("email")}
        defaultValue={user?.email || ""}
      />
      <p className={css.errorMsg}>{errors.email?.message}</p>

      <input
        className={css.inputStandard}
        type="tel"
        {...register("phone")}
        defaultValue={user?.phone || "+380"}
      />
      <p className={css.errorMsg}>{errors.phone?.message}</p>

      <button className={css.submitBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default FormEditUser;
