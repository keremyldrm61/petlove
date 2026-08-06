import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addPetSchema,
  type AddPetFormValues,
} from "../../../utils/validationSchemas";
import { addPet } from "../../../redux/auth/authOperations";
import { Icon } from "../../../shared/Icon";
import SexButtons from "./SexButtons/SexButtons";
import PetAvatar from "./PetAvatar/PetAvatar";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import TypeAnimal from "./TypeAnimal/TypeAnimal";
import css from "./CreationForm.module.css";

const CreationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const preset_key = import.meta.env.VITE_PRESET_KEY as string;
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL as string;

  const [sexPet, setSexPet] = useState<string>("unknown");
  const [petType, setPetType] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [petImageURL, setPetImageURL] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddPetFormValues>({
    resolver: yupResolver(addPetSchema),
  });

  const onSubmit: SubmitHandler<AddPetFormValues> = (data) => {
    // AddPetPayload tipi 'imgURL' beklediği için imgURL alanını eşitliyoruz
    const { imgURL, ...rest } = data;
    dispatch(addPet({ ...rest, imgURL: imgURL }));
    navigate("/profile");
  };

  useEffect(() => {
    if (sexPet !== "unknown") {
      setValue("sex", sexPet);
    }
    if (petType) {
      setValue("species", petType);
    }
    if (birthDate) {
      setValue("birthday", birthDate);
    }
  }, [birthDate, petType, setValue, sexPet]);

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
      .then((data) => setValue("imgURL", data.secure_url))
      .catch((error: Error) => console.log("Upload error:", error.message));

    const fileURL = URL.createObjectURL(file);
    setPetImageURL(fileURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SexButtons setSexPet={setSexPet} sexPet={sexPet} />
      <input type="text" className={css.invisibleInput} {...register("sex")} />
      {errors.sex?.message && (
        <p className={css.errorMsg}>{errors.sex.message}</p>
      )}

      <PetAvatar petImageURL={petImageURL} />

      <div className={css.uploadContainer}>
        <label>
          <input
            type="text"
            className={css.inputPetImage}
            {...register("imgURL")}
            placeholder="Enter URL"
          />
          {errors.imgURL?.message && (
            <p className={css.errorMsg}>{errors.imgURL.message}</p>
          )}
        </label>

        <label className={css.label}>
          <input
            type="file"
            name="avatarFile"
            className={css.addAvatarInput}
            onChange={handleUploadAvatar}
          />
          <Icon id="icon-upload-cloud" width={18} height={18} />
        </label>
      </div>

      <div className={css.inputBox}>
        <input
          type="text"
          className={css.inputNormal}
          {...register("title")}
          placeholder="Title"
        />
        {errors.title?.message && (
          <p className={css.errorMsg}>{errors.title.message}</p>
        )}
      </div>

      <div className={css.inputBox}>
        <input
          type="text"
          className={css.inputNormal}
          {...register("name")}
          placeholder="Pet's Name"
        />
        {errors.name?.message && (
          <p className={css.errorMsg}>{errors.name.message}</p>
        )}
      </div>

      <div className={css.boxContainer}>
        <div>
          <BirthdayInput birthDate={birthDate} setBirthDate={setBirthDate} />
          {errors.birthday?.message && (
            <p className={css.errorMsg}>{errors.birthday.message}</p>
          )}
          <input
            type="text"
            className={css.invisibleInput}
            {...register("birthday")}
          />
        </div>
        <div>
          <TypeAnimal petType={petType} setPetType={setPetType} />
          {errors.species?.message && (
            <p className={css.errorMsg}>{errors.species.message}</p>
          )}
          <input
            type="text"
            className={css.invisibleInput}
            {...register("species")}
          />
        </div>
      </div>

      <div className={css.buttonsBox}>
        <Link to="/profile" className={css.backBtn}>
          Back
        </Link>
        <button type="submit" className={css.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreationForm;
