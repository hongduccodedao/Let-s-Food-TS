import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

function App() {
   return (
      <div className="App">
         <Suspense
            fallback={
               <div className="w-screen h-screen bg-backgroundColor flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-orange border-t-transparent border-t-4 mx-auto"></div>
               </div>
            }>
            <Routes>
               {/* Home Page */}
               <Route path="/" element={<HomePage />} />

               {/* Page Not Found */}
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </Suspense>
      </div>
   );
}

export default App;
