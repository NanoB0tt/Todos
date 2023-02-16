import { create } from "zustand";


type State = {
  firstName: string;
  lastName: string;
}

type Actions = {
  updateFirstName: (firstName: State['firstName']) => void;
  updateLastName: (lastName: State['lastName']) => void;
}

const useStore = create<State & Actions>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

const App = () => {

  const [firstName, updateFirstName] = useStore(
    (state) => [state.firstName, state.updateFirstName]
  );

  return (
    <main>
      <label>
        First Name
        <input
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  )

}

export default App
