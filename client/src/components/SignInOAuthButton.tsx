import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  return (
    <Button
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-11"
      onClick={signInWithGoogle}
    >
      <img src="/google.png" alt="Google" className="size-5" />
      <span className="hidden md:inline">Continue with Google</span>
    </Button>
  );
};

export default SignInOAuthButton;
