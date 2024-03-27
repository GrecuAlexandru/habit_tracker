import { Button } from "@nextui-org/react";

const CreateHabit: React.FC = () => {
    return (
        <div>
            <h1>New Habit</h1>
            <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", bottom: 0, width: "100%", padding: 2 }}>
                <Button variant="text">Cancel</Button>
                <Button variant="contained">Done</Button>
            </div>
        </div>
    );
};

export default CreateHabit;