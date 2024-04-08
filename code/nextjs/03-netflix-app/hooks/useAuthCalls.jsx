import { auth } from "@/auth/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "@/helpers/ToastNotify";
import { loginSuccess, logoutSuccess } from "@/redux/features/authSlice";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    userObserver();
  }, []);

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

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toastSuccessNotify("Logged in successfully!");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        dispatch(loginSuccess({ email, displayName, photoURL }));
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        // User is signed out
        dispatch(logoutSuccess());
        sessionStorage.removeItem("user");
      }
    });
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully");
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        router.push("/profile");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };

  return { createUser, signIn, logOut, signUpProvider, forgotPassword };
};

export default useAuthCalls;
