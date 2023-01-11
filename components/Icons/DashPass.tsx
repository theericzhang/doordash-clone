import DashPassIcon from './DashPassIcon';

type TDashPass = {
    isDashPass: boolean;
};

export default function DashPassLabel({ isDashPass }: TDashPass) {
    return (
        isDashPass ?
            // style this dashpass area
            <>
                <DashPassIcon />
                asdasd
            </>
        :
            <>
            asd
            </>
    );
}