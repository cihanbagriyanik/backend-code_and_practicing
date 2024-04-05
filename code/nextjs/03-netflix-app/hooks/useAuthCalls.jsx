import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

const useAuthCalls = () => {
  const router = useRouter();
  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
      toastSuccessNotify("Registered successfully!");
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName,
      });
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  return { createUser };
};

export default useAuthCalls;
