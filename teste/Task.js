
const TaskSchema = {
    name:"Task",
    propreties:{
        _id:"string",
        _partition:"string",
        task: "string"
    },
    primaryKey:"_id",
};

export default TaskSchema;