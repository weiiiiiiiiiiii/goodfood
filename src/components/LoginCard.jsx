import { auth } from "../api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../api/firebaseConfig"

import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock } from 'lucide-react';
import { div } from "framer-motion/client";

const LoginCard = ({ redirect }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const onFinish = async (e) => {
        e.preventDefault();

        try {

            //先確認登入狀態是否要記住
            await setPersistence(
                auth,
                rememberMe ? browserLocalPersistence : browserSessionPersistence
            );

            //嘗試登入
            //firebase自動把使用者資料傳回來(自動生成的uid)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, "users", user.uid))
            const userData = userDoc.data();

            alert("歡迎登入~" + userData.username);
            window.location.href = redirect || "/";
        } catch (error) {
            alert("登入失敗:" + error.message);
        }

    };

    return (
            <form
                onSubmit={onFinish}
                className="bg-gray-100 p-6 mx-auto my-[70px] w-[500px] rounded-xl shadow-md space-y-4 content"
            >
                <div>
                    <label className="label">
                        <span className="label-text">E-mail</span>
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g., rwei@example.com"
                            className="input input-bordered w-full pl-10 bg-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">密碼</span>
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="At least 6 characters"
                            className="input input-bordered w-full pl-10 bg-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={e => setRememberMe(e.target.checked)}
                            className="w-5 h-5 rounded cursor-pointer"
                        />
                        <span className="text-sm text-gray-800 font-medium">記住我</span>
                    </label>
                    <Link to="/" className="link link-hover text-sm">忘記密碼</Link>
                </div>
                <button
                    type="submit"
                    className="btn bg-[#16a34a]/70 w-full "
                    disabled={false}
                >
                    登入
                </button>
                <p className="text-sm mt-2">
                    Or <Link to={`/auth/register?redirect=${redirect}`} className="link text-[#166534]">現在註冊</Link>
                </p>
            </form>
    );
};

export default LoginCard;