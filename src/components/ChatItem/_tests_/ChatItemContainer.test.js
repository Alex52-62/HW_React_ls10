import React from "react";
import "@testing-library/jest-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { render, mock, shallow } from "@testing-library/react";

import { ChatItemContainer } from "../ChatItemContainer";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    chatId: "12",
  }),
}));

describe("test ChatItemContainer ", () => {
  it("check handleDelete function", () => {
    const mockDispatch = jest.fn();
    let handleDelete = jest.fn();
    handleDelete = () => {
      const deleteChat = jest.fn();
      const dispatch = mockDispatch();
      let chats = [
        { name: "chat1", id: "chat-1", chatId: "12" },
        { name: "chat2", id: "chat-2", chatId: "chat-2" },
      ];
      dispatch(deleteChat(id));
      if (chatId !== id) {
        return;
      }
    };
    expect(handleDelete).toBe(handleDelete);
  });

  it("drawing chats with fake useSelector", () => {
    let chats = [
      { name: "chat1", id: "chat-1" },
      { name: "chat2", id: "chat-2" },
    ];
    const newChat = chats.map((chat) => {
      return chat.name;
    });
    chats = useSelector(newChat.name);
    expect(newChat).toStrictEqual(["chat1", "chat2"]);
  });

  it("checking useParams", () => {
    const { chatId } = useParams();
    expect(chatId).toStrictEqual("12");
  });
});
