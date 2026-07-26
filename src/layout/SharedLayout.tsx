import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <header>
        {/* Daha sonra buraya detaylı Header bileşenimizi çizeceğiz */}
        <div>PetLove Header (Placeholder)</div>
      </header>

      <main>
        {/* Sayfa geçişlerinde gösterilecek geçici yükleme durumu */}
        <Suspense fallback={<div>Sayfa yükleniyor...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
