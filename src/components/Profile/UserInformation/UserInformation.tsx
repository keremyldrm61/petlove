import { useState } from "react";
import UserData from "./UserData/UserData";
import MyInformation from "./UserData/MyInformation/MyInformation";
import MyPetsTitle from "./MyPetsTitle/MyPetsTitle";
import ProfilePetsList from "./ProfilePetsList/ProfilePetsList";
import Logout from "./Logout/Logout";
import ModalLogout from "../ModalLogout/ModalLogout";

interface UserInformationProps {
  setShowEditForm: (show: boolean) => void;
}

const UserInformation = ({ setShowEditForm }: UserInformationProps) => {
  const [showLogout, setShowLogout] = useState<boolean>(false);

  return (
    <div>
      <UserData setShowEditForm={setShowEditForm} />
      <MyInformation />
      <MyPetsTitle />
      <ProfilePetsList />
      <Logout setShowLogout={setShowLogout} />
      {showLogout && (
        <ModalLogout setShowLogout={setShowLogout} showLogout={showLogout} />
      )}
    </div>
  );
};

export default UserInformation;
