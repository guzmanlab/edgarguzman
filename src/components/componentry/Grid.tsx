// @components/componentry/Grid.tsx
// import { ExclamationIcon } from '@heroicons/react/outline';
// import PropTypes from 'prop-types';

// // import { Card } from '@components';
// import Card from './Card';

// const Grid = ({ homes = [] }): JSX.Element => {
//     const isEmpty = homes.length === 0;

//     return isEmpty ? (
//         <p className='text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1'>
//             <ExclamationIcon className='shrink-0 w-5 h-5 mt-px' />
//             <span>Unfortunately, there is nothing to display yet.</span>
//         </p>
//     ) : (
//         <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
//             {homes.map(home => (
//                 <Card
//                     key={home.id}
//                     {...home}
//                 />
//             ))}
//         </div>
//     );
// };

// Grid.propTypes = {
//     homes: PropTypes.array
// };

// export default Grid;

// un-comment this above

// this is template

type Props = {};

const Grid = (props: Props) => {
    return <div>Grid</div>;
};

export default Grid;
