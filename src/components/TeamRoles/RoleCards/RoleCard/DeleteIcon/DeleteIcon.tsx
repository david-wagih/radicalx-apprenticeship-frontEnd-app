import { FC, useContext } from 'react';

import { RolesContext } from '../../../../../Contexts/RolesContext/RolesContext';
import { teamRoles } from '../../../../../features/CreatingApprenticeship/Controller';

interface DeleteIconProps {
    index: number;
}
const DeleteIcon: FC<DeleteIconProps> = ({ index }) => {
    const { setNeededRoles, neededRoles } = useContext(RolesContext);
    return (
        <div
            className="delete- hover:cursor-pointer"
            onClick={() => {
                const newNeededRoles = neededRoles.filter(
                    (neededRole, i) => i !== index
                );
                setNeededRoles(newNeededRoles);
            }}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.5">
                    <path
                        d="M2.48187 4.85603L2.48211 4.85601L4.18211 4.68935L4.18382 4.68917C8.57175 4.24378 13.0273 4.41608 17.5095 4.856L17.5098 4.85603C17.5726 4.86216 17.6259 4.92235 17.619 4.99318L17.6189 4.99317L17.6181 5.00338C17.6139 5.05834 17.5651 5.10839 17.5 5.10839H17.4999H17.4998H17.4997H17.4996H17.4995H17.4994H17.4993H17.4992H17.4991H17.499H17.4989H17.4988H17.4987H17.4986H17.4985H17.4984H17.4983H17.4982H17.4981H17.498H17.4979H17.4978H17.4977H17.4976H17.4975H17.4974H17.4973H17.4972H17.4971H17.497H17.4969H17.4968H17.4967H17.4966H17.4965H17.4964H17.4963H17.4961H17.496H17.4959H17.4958H17.4957H17.4956H17.4955H17.4954H17.4953H17.4952H17.4951H17.495H17.4949H17.4948H17.4947H17.4946H17.4944H17.4943H17.4942H17.4941H17.494H17.4939H17.4938H17.4937H17.4936H17.4935H17.4934H17.4933H17.4931H17.493H17.4929H17.4928H17.4927H17.4926H17.4925H17.4924H17.4923H17.4922H17.492H17.4919H17.4918H17.4917H17.4916H17.4915H17.4914H17.4913H17.4912H17.491H17.4909H17.4908H17.4907H17.4906H17.4905H17.4904H17.4902H17.4901H17.49H17.4899H17.4898H17.4897H17.4896H17.4894H17.4893H17.4892H17.4891H17.489H17.4889H17.4888H17.4886H17.4885H17.4884H17.4883H17.4882H17.4881H17.4879H17.4878H17.4877H17.4876H17.4875H17.4874H17.4872H17.4871H17.487H17.4869H17.4868H17.4867H17.4865H17.4864H17.4863H17.4862H17.4861H17.4859H17.4858H17.4857H17.4856H17.4855H17.4853H17.4852H17.4851H17.485H17.4849H17.4847H17.4846H17.4845H17.4844H17.4843H17.4841H17.484H17.4839H17.4838H17.4837H17.4835H17.4834H17.4833H17.4832H17.483H17.4829H17.4828H17.4827H17.4825H17.4824H17.4823H17.4822H17.4821H17.4819H17.4818H17.4817H17.4816H17.4814H17.4813H17.4812H17.4811H17.4809H17.4808H17.4807H17.4806H17.4804H17.4803H17.4802H17.4801H17.4799H17.4798H17.4797H17.4796H17.4794H17.4793H17.4792H17.4791H17.4789H17.4788H17.4787H17.4785H17.4784H17.4783H17.4782H17.478H17.4779H17.4778H17.4777H17.4775H17.4774H17.4773H17.4771H17.477H17.4769H17.4768H17.4766H17.4765H17.4764H17.4762H17.4761H17.476H17.4759H17.4757H17.4756H17.4755H17.4753H17.4752H17.4751H17.4749H17.4748H17.4747H17.4746H17.4744H17.4743H17.4742H17.474H17.4739H17.4738H17.4736H17.4735H17.4734H17.4732H17.4731H17.473H17.4728H17.4727H17.4726H17.4724H17.4723H17.4722H17.4721H17.4719H17.4718H17.4717H17.4715H17.4714H17.4713H17.4711H17.471H17.4709H17.4707H17.4706H17.4705H17.4703H17.4702H17.4701H17.4699H17.4698H17.4696H17.4695H17.4694H17.4692H17.4691H17.469H17.4688H17.4687H17.4686H17.4684H17.4683H17.4682H17.468H17.4679H17.4678H17.4676H17.4675H17.4674H17.4672H17.4671H17.4669H17.4668H17.4667H17.4665H17.4664H17.4663H17.4661H17.466H17.4659H17.4657H17.4656H17.4654H17.4653H17.4652H17.465H17.4649H17.4648H17.4646H17.4645H17.4643H17.4642H17.4641H17.4639H17.4638H17.4636H17.4635H17.4634H17.4632H17.4631H17.463H17.4628H17.4627H17.4625H17.4624H17.4623H17.4621H17.462H17.4618H17.4617H17.4616H17.4614H17.4613H17.4612H17.461H17.4609H17.4607H17.4606H17.4605H17.4603H17.4602H17.46H17.4599H17.4598H17.4596H17.4595H17.4593H17.4592H17.459H17.4589H17.4588H17.4586H17.4585H17.4583H17.4583C13.0394 4.66671 8.61197 4.4989 4.21706 4.94419C4.21679 4.94422 4.21652 4.94425 4.21625 4.94428L2.51925 5.11065C2.5191 5.11066 2.51895 5.11068 2.5188 5.11069C2.43863 5.1181 2.37938 5.06403 2.37274 4.99432C2.36543 4.91759 2.41578 4.86248 2.48187 4.85603Z"
                        fill="#292D32"
                        stroke="#1E1E1E"
                    />
                    <path
                        d="M7.06588 4.26668C7.06578 4.26668 7.06569 4.26667 7.06559 4.26667L7.06118 4.2659C7.03205 4.2608 7.00258 4.24316 6.98125 4.2132C6.96016 4.18357 6.95477 4.15306 6.95917 4.12794L6.95975 4.12456L7.14308 3.03289L7.14318 3.03228C7.21324 2.61194 7.28017 2.26933 7.48968 2.01048C7.67134 1.78604 8.03612 1.54175 8.90832 1.54175H11.0917C11.9628 1.54175 12.3302 1.79315 12.514 2.02402C12.7256 2.28979 12.7909 2.63668 12.8565 3.03887L12.8565 3.03888L12.857 3.04184L13.0403 4.12518L13.0405 4.1259C13.0462 4.15931 13.0381 4.19231 13.0187 4.21945C12.9993 4.24677 12.9743 4.26043 12.9508 4.26395L12.9508 4.26385L12.9408 4.26555C12.9074 4.27125 12.8744 4.26314 12.8473 4.24382C12.82 4.22437 12.8063 4.19938 12.8028 4.17591L12.8029 4.1759L12.8013 4.16665L12.6183 3.08535L12.616 3.07103C12.5893 2.90501 12.5618 2.73412 12.521 2.58955C12.4772 2.43432 12.4033 2.25162 12.2463 2.1009C12.0866 1.94754 11.894 1.87766 11.7105 1.84249C11.5332 1.8085 11.3266 1.80008 11.1 1.80008H8.91665C8.69287 1.80008 8.48859 1.80681 8.31458 1.8375C8.13497 1.86917 7.94059 1.93399 7.7781 2.08608C7.61798 2.23595 7.54364 2.41986 7.49958 2.57398C7.45921 2.7152 7.43081 2.88398 7.40284 3.0502C7.40154 3.05791 7.40024 3.06562 7.39895 3.07332L7.20763 4.15464L7.20758 4.15463L7.20643 4.16171C7.19661 4.2223 7.14385 4.26675 7.08332 4.26675L7.06588 4.26668Z"
                        fill="#292D32"
                        stroke="#1E1E1E"
                    />
                    <path
                        d="M4.16563 7.62619L4.16564 7.62619L4.16533 7.62191C4.16329 7.594 4.17242 7.56366 4.19632 7.53648C4.21915 7.51051 4.24928 7.49478 4.28055 7.49097C4.3595 7.49034 4.41249 7.54551 4.41789 7.61021L4.95937 15.9989L4.95935 15.9989L4.95963 16.0028L4.96132 16.0262C4.98291 16.3247 5.00402 16.6167 5.05291 16.8685C5.10412 17.1323 5.19483 17.4064 5.39329 17.638C5.79414 18.1056 6.46409 18.2084 7.325 18.2084H12.675C13.5391 18.2084 14.2118 18.106 14.613 17.638C14.812 17.4057 14.9021 17.1307 14.9522 16.8663C15.0003 16.6125 15.0196 16.3183 15.0394 16.0178L15.0406 15.9996L15.0406 15.9989L15.5821 7.61029C15.5873 7.54891 15.6449 7.49045 15.7196 7.49097C15.7942 7.49946 15.839 7.56107 15.8346 7.62277L15.8344 7.62619L15.2929 16.0149C15.2929 16.0154 15.2928 16.0159 15.2928 16.0164C15.2449 16.6951 15.1906 17.271 14.883 17.7007C14.6082 18.0846 14.0403 18.4584 12.675 18.4584H7.325C5.9597 18.4584 5.39182 18.0846 5.11698 17.7007C4.80935 17.271 4.75507 16.695 4.7072 16.0164C4.70716 16.0159 4.70713 16.0154 4.70709 16.0149L4.16563 7.62619Z"
                        fill="#292D32"
                        stroke="#1E1E1E"
                    />
                    <path
                        d="M11.3833 13.875H8.60834C8.57819 13.875 8.54691 13.8627 8.52127 13.8371C8.49562 13.8114 8.48334 13.7801 8.48334 13.75C8.48334 13.7199 8.49562 13.6886 8.52127 13.6629C8.54691 13.6373 8.57819 13.625 8.60834 13.625H11.3833C11.4135 13.625 11.4448 13.6373 11.4704 13.6629C11.4961 13.6886 11.5083 13.7199 11.5083 13.75C11.5083 13.7801 11.4961 13.8114 11.4704 13.8371C11.4448 13.8627 11.4135 13.875 11.3833 13.875Z"
                        fill="#292D32"
                        stroke="#1E1E1E"
                    />
                    <path
                        d="M12.0833 11.0417H7.91666C7.57499 11.0417 7.29166 10.7584 7.29166 10.4167C7.29166 10.0751 7.57499 9.79175 7.91666 9.79175H12.0833C12.425 9.79175 12.7083 10.0751 12.7083 10.4167C12.7083 10.7584 12.425 11.0417 12.0833 11.0417Z"
                        fill="#292D32"
                    />
                </g>
            </svg>
        </div>
    );
};

export default DeleteIcon;
