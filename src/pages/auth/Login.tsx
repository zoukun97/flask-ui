import { useNavigate } from "react-router";
import { login } from "../../api/auth";

export const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await login(formData);
      if (!res.ok) {
        console.error(res.message);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>ログイン</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': 10, 'width': 400, 'paddingRight': 100}}>
          <input type="email" name="email" placeholder="メールアドレス" />
          <input type="password" name="password" placeholder="パスワード" />
          <div>
            <button type="submit">ログイン</button>
          </div>
        </div>
      </form>
    </div>
  )
}
