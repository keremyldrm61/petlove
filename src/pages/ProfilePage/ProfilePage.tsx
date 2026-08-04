import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import EditProfileModal from "../../components/Profile/EditProfileModal/EditProfileModal";
import UserAndEditButtons from "../../components/Profile/UserAndEditButtons/UserAndEditButtons";
import UserInformation from "../../components/Profile/UserInformation/UserInformation";
import LinksCollections from "../../components/Profile/LinksCollections/LinksCollections";
import FallbackLoader from "../../components/UI/FallbackLoader/FallbackLoader";
import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);

  return (
    <>
      {showEditForm && (
        <EditProfileModal
          setShowEditForm={setShowEditForm}
          showEditForm={showEditForm}
        />
      )}
      <section className={css.profilePageSection}>
        <div className={css.desktopBox}>
          <div className={css.container}>
            <UserAndEditButtons setShowEditForm={setShowEditForm} />
            <UserInformation setShowEditForm={setShowEditForm} />
          </div>
          <div>
            <LinksCollections />
            <Suspense fallback={<FallbackLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
