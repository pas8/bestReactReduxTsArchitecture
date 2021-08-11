import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toChangeStatusOfExample } from '../store/modules/App/actions';
import { operatoToSetExampleTitle } from '../store/modules/App/operations';
import { getIsThisArchitecturePerfect, getTitle } from '../store/modules/App/selectors';

const Index = () => {
  const dispatch = useDispatch();

  const title = useSelector(getTitle);

    useEffect(() => {
    dispatch(operatoToSetExampleTitle());
  }, []);
  const handleSetExampleStatusIsTrue = () => {
    dispatch(toChangeStatusOfExample({ isThisArchitecturePerfect: true }));
  };
  const handleSetExampleStatusIsFalse = () => {
    dispatch(toChangeStatusOfExample({ isThisArchitecturePerfect: false }));
  };

  const isThisArchitecturePerfect = useSelector(getIsThisArchitecturePerfect);


  const containerStyling = {
    width: 'calc(100vw + 2px)',
    margin: -10,
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    background: '#222222',
  };

  const textStyling = {
    color: 'white',
    fontFamily: 'Monospace',
  };

  const buttonContainerStyling = {
    display: 'flex',
    gap: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyling = {
    ...textStyling,
    borderRadius: 8,
    cursor: 'pointer',
    border: '1px solid white',
    background: 'transparent',
    padding: '8px 42px',
    width: '50%',
    fontSize: 18,
    fontFamily: 'Monospace',
  };

  return (
    <>
      <div style={containerStyling}>
        <div>
          <h1 style={textStyling}>{title}</h1>
          <h1 style={textStyling}>{`- ${isThisArchitecturePerfect}`.toUpperCase()}</h1>
          <div style={buttonContainerStyling}>
            <button style={{ ...buttonStyling, textTransform: 'uppercase' }} onClick={handleSetExampleStatusIsTrue}>
              True
            </button>
            <button style={{ ...buttonStyling, textTransform: 'uppercase' }} onClick={handleSetExampleStatusIsFalse}>
              False
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
