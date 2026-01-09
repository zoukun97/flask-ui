import { useNavigate } from "react-router";
import { register } from "../../api/auth"

export const Regisuter = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await register(formData);
      if (!res.ok) {
        console.error(res.message)
      } else {
        // ログイン画面にリダイレクト
        navigate('/auth/login');
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <h2>Sign Up</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': 10, 'width': 400, 'paddingRight': 100}}>
          <input type="text" name="name" placeholder="ユーザー名" />
          <input type="email" name="email" placeholder="メールアドレス" />
          <input type="password" name="password" placeholder="パスワード" />
          <div>
            <button type="submit">登録</button>
          </div>
        </div>
      </form>
    </div>
  )
}
