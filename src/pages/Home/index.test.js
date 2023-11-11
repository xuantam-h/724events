import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import PeopleCard from "../../components/PeopleCard";
import Page from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Page />);
    const eventsList = screen.getAllByTestId("eventsList");
    expect(eventsList).not.toHaveLength(0);
  })
  it("a list a people is displayed", () => {
    render(<Page />);
    const peopleId = screen.getAllByTestId("PeopleCardId");
    expect(peopleId).toHaveLength(6);
  })
  it("a footer is displayed", async () => {
    render(<Page />);
    const Footer = screen.getByTestId("Footer");
    expect(Footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Page />);
    const Footer = screen.getByTestId("Footer");
    const lastEventCard = Footer.firstChild;
    expect(lastEventCard).toBeInTheDocument();
  })
});
