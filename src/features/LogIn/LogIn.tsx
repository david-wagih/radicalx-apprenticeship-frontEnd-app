import { FC } from 'react';

import InputField from '../../components/InputField';

const LogIn: FC = () => {
    return (
        <InputField
            type="text"
            //NOTE just example of using tailwind css
            className="form-control border border-red-600"
            name="email"
            value=""
            placeholder="Email"
        />
    );
};

export default LogIn;
