const mainInterests = document.querySelector( '.interests_main' );
const interestChecks = mainInterests.querySelectorAll( '.interest__check' );

//Добавляем обработчик событий на все чекбоксы
for ( const interest of interestChecks ) {

  function changeCheck(e) {
    const { target } = e;
    
    if ( !target.classList.contains( 'interest__check' ) ) return;
    
    changeChildCheck( target );
    changeParentCheck( target );
  }

  interest.addEventListener( 'change', changeCheck );
}

//Меняем галочки вложенных чекбоксов 
function changeChildCheck(el) {

  const { checked } = el;
  const children = getChildren( el.closest('.interest'), '.interest__check' );

  if ( !children ) return;

  children.forEach( child => {
    child.checked = checked;
    child.indeterminate = false;
  });

}

// Получаем коллекцию вложенных чекбоксов
function getChildren( el, className ) {

	const nestedList = el.querySelector( '.interests' );
	
	return !nestedList ? [] : nestedList.querySelectorAll(className);
}

//Меняем галочку чекбокса-родителя
function changeParentCheck( el ) {
  
  parent = el.closest('.interests').closest('.interest');

  if (!parent) return;
  
  let children = getChildren( parent, '.interest__check' );
	let selectedChildren = getChildren( parent, '.interest__check:checked' );
  let parentCheck = parent.querySelector( '.interest__check' ); 
 
	parentCheck.checked = selectedChildren.length === children.length;
	parentCheck.indeterminate = !parentCheck.checked && selectedChildren.length;
}



