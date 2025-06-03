import { Link } from "react-router"
import { Mail, Lock } from 'lucide-react';

const LoginCard = ({ redirect }) =>{
    const onFinish = () => {
    };

    return(
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
                        placeholder="e.g.,rwei@example.com"
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
                        className="input input-bordered w-full pl-10 bg-gray-300"
                        required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                        type="checkbox"
                        checked={false}
                        onChange={e => {}}
                        className="checkbox"
                    />
                    <span className="label-text">記住我</span>
                </label>
                <Link to="/" className="link link-hover text-sm">忘記密碼</Link>
            </div>
            <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={false}
            >
                登入
            </button>
            <p className="text-sm mt-2">
                Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary">現在註冊</Link>
            </p>
        </form>
    );
};

export default LoginCard;