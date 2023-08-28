import css from "./App.module.css";
import { Button } from "./ui-lib/button/Button";
import { ButtonWithTooltip } from "./ui-lib/button_with_tooltip/ButtonWithTooltip";

function App() {
  return (
    <>
      <section className={css.container}>
        <h1 className={css.heading}>This is an app</h1>
        <h2>Here's buttons</h2>
        <div className={css.contentContainer}>
          <Button label="Regular button!" />
          <ButtonWithTooltip
            label="Button with tooltip!"
            tooltip={{ content: <p>This is some tooltip content</p> }}
          />
          <ButtonWithTooltip
            label="Button with active tooltip!"
            tooltip={{
              content: <p>This is some always active tooltip content</p>,
              active: true,
            }}
            onMouseEnter={() => {
              console.log("this also executes?");
            }}
          />
          <ButtonWithTooltip
            label="Button with always disabled tooltip!"
            tooltip={{
              content: <p>This is some always disabled tooltip content</p>,
              active: false,
            }}
          />
        </div>
      </section>
    </>
  );
}

export default App;
