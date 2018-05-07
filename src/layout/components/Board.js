import React from "react";
import "layout/styles/board.css";
import { Switch, Route } from "react-router-dom";
import { boardRoutes } from "routes/boardRoutes";
import {applicationRoutes} from "routes/applicationRoutes";

const Board = () => {
  return (
    <div className="board">
      <Switch>
        {boardRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
        {applicationRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}

      </Switch>
    </div>
  );
};
export default Board;
