import Dashboard from "@/components/Dashboard";
import TodoComponent from "@/components/TodoComponent";

const page = () => {
  return (
    <div>
      <Dashboard />
      <div className="flex w-full min-h-1/2 justify-center items-center">
        <TodoComponent />
      </div>
    </div>
  );
};

export default page;
