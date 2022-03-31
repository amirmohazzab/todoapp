import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";
import { Button } from "react-bootstrap";

const AddNewTask = () => {
    const context = useContext(TodoContext);

    return (
        <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
            <form
                className="form-inline justify-content-center"
                onSubmit={e => e.preventDefault()}
            >
                <div className="input-group w-100">
                    <input 
                      type="text" 
                      class="form-control rounded" 
                      placeholder="Add new task"
                      aria-describedby="basic"
                      value={context.todo}
                      onChange={context.handleTodoInput}
                    />
                    <Button
                      id="basic" 
                      type="submit"
                      className="bg-transparent fa fa-plus-square text-light"
                      onClick={context.handleCreateNewTodo}
                    />
                </div>     
                {/* <div class="input-group mb-3">
                    <input 
                        type="text" 
                        class="form-control rounded" 
                        placeholder="Add new task"
                        value={context.todo}
                        onChange={context.handleTodoInput}
                    />
                    <div class="input-group-text">   
                        <button
                            type="submit"
                            className="btn btn-sm bg-transparent fa fa-plus-square text-light"
                            onClick={context.handleCreateNewTodo}
                        />
                    </div>
                </div> */}

                 {/* <div className="input-group w-100">
                    <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Add new task"
                        value={context.todo}
                        onChange={context.handleTodoInput}
                    />
                    <div className="input-group-prepend">
                        <button
                            type="submit"
                            className="btn btn-sm bg-transparent fa fa-plus-square text-light d-flex align-items-center"
                            onClick={context.handleCreateNewTodo}
                        />
                    </div>
                </div> */}
            </form>
        </div>
    );
};

export default AddNewTask;
