import { FC, useState } from 'react';

import InputField from '../../components/InputField';

const LogIn: FC = () => {
    const [email, setEmail] = useState('');
    return (
        <InputField
            type="text"
            //NOTE just example of using tailwind css
            className="form-control border border-red-500"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
        />
    );
};

export default LogIn;
