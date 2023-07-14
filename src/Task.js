import { differenceInDays, formatDistanceToNow } from 'date-fns'
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {

  const gunumuz = new Date()
  const deadline = new Date(taskObj.deadline);
  const fark = (differenceInDays(deadline, gunumuz) <= 3 ? false : true);
  const neZaman = formatDistanceToNow(deadline, { addSuffix: true, locale: tr })

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-md">
      <h3 className="deadline text-[#c8781a]">{taskObj.title}</h3>

      <div className="text-xs pt-1">
        son teslim: {" "}
        <span className={`py-1 px-2 rounded-sm inline-block ${fark ? "bg-[#d2d5fd]" : "bg-[#ffd9d4]"}`}>
          {neZaman}
        </span>
      </div>

      <p className=" pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block px-3 py-1 text-sm border border-solid border-[#ccc] mr-1 mb-1.5 rounded-3xl" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className=" block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0,0.5)] rounded border-0 cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;