import { REQUEST_STATUS } from "../../../utils/constants";
import { getArticles } from "../actions";
import { articlesReducer } from "../reducer";

describe("articles reducer IDDLE", () => {
  it("returns state with status IDLE after getArticles action", () => {
    const expected = {
      list: [],
      request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
      },
    };
    const received = articlesReducer(undefined, getArticles());

    expect(expected).toEqual(received);
  });
});

describe("articles reducer PENDING", () => {
  it("returns state with status PENDING after getArticles action", () => {
    const expected = {
      request: {
        error: null,
        status: REQUEST_STATUS.PENDING,
      },
    };
    const received = articlesReducer(
      { request: { error: null, status: 1 } },
      getArticles()
    );

    expect(expected).toEqual(received);
  });
});

describe("articles reducer SUCCESS", () => {
  it("returns state with status SUCCESS after getArticles action", () => {
    const expected = {
      request: {
        status: REQUEST_STATUS.SUCCESS,
      },
    };
    const received = articlesReducer({ request: { status: 2 } }, getArticles());

    expect(expected).toEqual(received);
  });
});

describe("articles reducer FAILURE", () => {
  it("returns state with status FAILURE after getArticles action", () => {
    const expected = {
      request: {
        status: REQUEST_STATUS.FAILURE,
      },
    };
    const received = articlesReducer({ request: { status: 3 } }, getArticles());

    expect(expected).toEqual(received);
  });
});
