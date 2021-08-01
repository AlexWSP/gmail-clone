import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";
import Header from "./Components/Header";
import Main from "./Components/Main";
import EmailItem from "./Components/emailitem/EmailItem";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />); 
  })

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders Email header", () => {
    const welcome = <Header />;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it("renders Main content", () => {
    const welcome = <Main />;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it.todo("...")

});

const email = {
  _id: 123,
  starred: false,
  from: "Person A",
  subject: "Safeguard yourself from scams",
  message:
    "Learn how to protect yourself and keep the scammers at bay. Problems viewing this email? Select always display images or click here to view the online version.",
  received: "08:00",
  read: true,
};

describe("<EmailItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmailItem starred={email.starred} from={email.from} subject={email.subject} message={email.subject} received={email.received} read={email.read} />);
  })

  it("accepts email props", () => {
    const wrapper2 = mount(<EmailItem email={email} />);
    expect(wrapper2.props().email).toEqual(email);
  });

  it('correct email', () => {
    expect(
      wrapper.containsMatchingElement(
        <p>{email.from}</p>,
        <p>{email.subject}</p>,
        <span>{email.message}</span>,
        <p>{email.received}</p>,
      )
    ).toBe(true);    
  });

  it('starred icon working', () => {
    expect(
      wrapper.containsMatchingElement(
        <StarRoundedIcon />
      )
    ).toBe(false);    
    expect(
      wrapper.containsMatchingElement(
        <StarBorderRoundedIcon />
      )
    ).toBe(true);  
  });
});

describe("<EmailsView />", () => {
  it.todo("...")
});