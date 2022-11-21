import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage"));

function App() {
   return (
      <div className="App">
         <Suspense
            fallback={
               <div className="w-screen h-screen bg-backgroundColor">
                  <div className="w-10 h-10 rounded-full border-4 border-orange border-t-transparent border-t-4 mx-auto"></div>
               </div>
            }>
            <Routes>
               <Route path="/" element={<HomePage />} />
            </Routes>
         </Suspense>
      </div>
   );
}

export default App;
