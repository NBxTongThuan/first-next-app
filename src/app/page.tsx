import { Button } from "antd";
import '@ant-design/v5-patch-for-react-19';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello
      <Button>Click me</Button>

    </div>
  );
}
