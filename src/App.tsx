import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import Navbar from "./layout/navbar";
import CountryDetailsPage from "./pages/countryDetails";
import HomePage from "./pages/home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<CountryDetailsPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
