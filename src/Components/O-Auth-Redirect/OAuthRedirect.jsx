import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function OAuthRedirect() {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    async function completeSignIn() {
      try {
        await handleRedirectCallback();
        navigate("/Dashboard"); // Redirect to dashboard after successful OAuth
      } catch (error) {
        console.error("Error handling OAuth redirect:", error);
        navigate("/Signin"); // Redirect to sign-in on error
      }
    }

    completeSignIn();
  }, [handleRedirectCallback, navigate]);

  return <div>Signing in...</div>; // Optional loading message or spinner
}
