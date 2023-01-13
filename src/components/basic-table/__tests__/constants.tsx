import { Block } from "baseui/block";
import { Button } from "../../button";
import { Checkbox } from "../../checkbox";
import { Toggle, ToggleSize } from "../../toggle";
import { Input } from "../../input";
import { Textarea } from "../../textarea";
import React from "react";
import { BasicTableColumnType } from "../types";

export const COLUMNS = [{
    title: "Name",
    type: BasicTableColumnType.Text,
    dataKey: "name",
  }, {
    title: "Age",
    type: BasicTableColumnType.Text,
    dataKey: "age",
  }, {
    title: "Address",
    type: BasicTableColumnType.Text,
    dataKey: "address",
  }, {
    title: "Actions",
    type: BasicTableColumnType.Custom,
    dataKey: "actions",
  }];

export const DATA = [
    {
      name: "John Smith",
      age: 30,
      address: "100 Market St., San Francisco, California",
      actions: <Button onClick={() => alert('Hey there!')}>Action!</Button>
    },
    {
      name: "Sarah Brown",
      age: 31,
      address: "100 Broadway St., New York City, New York",
      actions: <Input placeholder="Fill me in" />
    },
    {
      name: "Jane Doe",
      age: 32,
      address: "100 Main St., Los Angeles, California",
      actions: <Toggle size={ToggleSize.large} />
    },
    {
      name: "Lily Williams",
      age: 30,
      address: "100 1st St., San Jose, California",
      actions: <Block marginTop="6px" marginBottom="6px" width="100%"><Textarea placeholder="Fill me in" /></Block>
    },
    {
      name: "Hank Smith",
      age: 40,
      address: "100 Baker St., Dallas, Texas",
      actions: <Checkbox />
    },
  ];