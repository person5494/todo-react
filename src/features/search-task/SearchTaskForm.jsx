import { useContext } from "react";
import Field from "@/shared/ui/Field";
import { TasksDataContext, TasksActionsContext } from "@/entities/todo";

const SearchTaskForm = (props) => {
  const { styles } = props

  const { searchQuery } = useContext(TasksDataContext);
  
  const { setSearchQuery } = useContext(TasksActionsContext);

  return (
    <form
      className= {styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
            className= {styles.field}
            label="Search task"
            id="search-task"
            type="search"
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;
