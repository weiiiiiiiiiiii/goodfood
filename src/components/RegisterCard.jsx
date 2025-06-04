import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, User } from "lucide-react";
import { auth, db } from "../api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"

//宣告一個元件叫做RegisterCard 
//redirect是用來轉註冊成功後跳的網址
const RegisterCard = ({ redirect }) => {

    //建立一個狀態 formData 記住使用者填的以下資料
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: "",
        agreement: false,
    });

    //按下註冊按鈕就會執行onFinish
    //e當作event 指事件
    const onFinish = async (e) => {

        //阻止表單預設的流程
        e.preventDefault();

        //檢查兩次輸入的密碼是否一樣
        if (formData.password !== formData.rePassword) {
            alert("兩次的密碼不一樣");
            return;
        }

        //嘗試以下程式碼 假如錯的話就會跳去catch
        try {

            //用firebase提供的createUserWithEmailAndPassword
            //新帳號註冊成功會回傳userCredential
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            //拿真正的使用者資訊
            //裡面有個 ID 叫 user.uid
            const user = userCredential.user

            //儲存資料到firebase
            //用users這個櫃子 用user.uid當檔案名稱
            await setDoc(doc(db, "users", user.uid), {
                username: formData.username,
                email: formData.email,
                createdAt: new Date()
            });

            alert("註冊成功!");

            //把使用者導到其他頁面 假如沒設定redirect就回首頁
            window.location.href = redirect || "/";

        } catch (error) {
            alert("註冊失敗:" + error.message);
        }

    };

    return (
        <form
            onSubmit={onFinish}
            className="bg-gray-100 p-6 mx-auto my-[50px] w-[500px] rounded-xl shadow-md space-y-4 content"
        >
            <div>
                <label className="label">
                    <span className="label-text">你的名字</span>
                </label>
                <div className="relative">
                    <input
                        type="text"
                        name="username"

                        //示範文字
                        placeholder="e.g., RWei"

                        value={formData.username}

                        //每當有人輸入字 就會更新一次
                        //onChange是一個監聽器
                        //e 指事件 target指發生事件的東西 指輸入框 value指輸入框現在的內容
                        //把輸入框的內容存進username
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                        className="input input-bordered w-full pl-10 bg-gray-300"

                        //這一格一定要填歐 不能留白
                        required
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                </div>
            </div>
            <div>
                <label className="label">
                    <span className="label-text">E-mail</span>
                </label>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="e.g., rwei@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="input input-bordered w-full pl-10 bg-gray-300"
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
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        className="input input-bordered w-full pl-10 bg-gray-300"
                        required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                </div>
            </div>
            <div>
                <label className="label">
                    <span className="label-text">確認密碼</span>
                </label>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Re-enter Password"
                        value={formData.rePassword}
                        onChange={e => { setFormData({ ...formData, rePassword: e.target.value }) }}
                        className="input input-bordered w-full pl-10 bg-gray-300"
                        required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 p-3 rounded-lg border border-green-300">
                <input
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={e => setFormData({ ...formData, agreement: e.target.checked })}
                    className="w-5 h-5 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-800 font-medium">
                    我已詳細閱讀 <Link to="/" className="underline text-[#166534]">條款</Link>
                </span>
            </div>

            <button type="submit" className="btn bg-[#16a34a]/70 w-full" disabled={false}>
                註冊帳號
            </button>
            <p className="text-sm mt-2">
                已經有帳號了? <Link to={`/auth/login?redirect=${redirect}`} className="link text-[#166534]">登入</Link>
            </p>
        </form>
    );
};

export default RegisterCard;