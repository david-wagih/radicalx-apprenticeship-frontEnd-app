import { FC, useState } from 'react';

import InputField from '../../components/InputField/InputField';

import RememberMe from './RememberMe/RememberMe';

const LogIn: FC = () => {
    const [email, setEmail] = useState('');
    return (
        <>
            <InputField
                type="text"
                //NOTE just example of using tailwind css
                className="form-control border border-red-500"
                name="email"
                defaultValue={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />

            <RememberMe/>
        </>
    );
};

export default LogIn;
