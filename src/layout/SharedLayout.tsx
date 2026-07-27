import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Sayfa geçişlerinde gösterilecek geçici yükleme durumu */}
        <Suspense fallback={<div>Sayfa yükleniyor...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
