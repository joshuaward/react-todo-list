import { useContext } from "react";
import TodosContext from "../context";

function useTodosContext() {
	return useContext(TodosContext);
}

export default useTodosContext;