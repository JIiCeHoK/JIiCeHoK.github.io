let itemsName = [{
                    path: '',
                    name: 'Image 1',
                },
                {
                    path: '',
                    name: 'Image 2',
                },
                {
                    path: '',
                    name: 'Image 3',
                }
            ]
            let imageName = document.getElementById('imageName');

            let itemIndex = 0;

            function nextClick() {
                setIndexNext();
                setItem();
            }

            function backClick() {
                setItemIndexBack();
                setItem();
            }




            let images = document.getElementsByClassName('fade');
            let arr = [];

            for (const i of images) {
                arr.push(i);
            }

            setItem(itemIndex);

            function setIndexNext() {
                if (itemIndex >= arr.length - 1) {
                    itemIndex = 0;

                    return;
                }

                itemIndex++;
            }

            function setItemIndexBack() {
                if (itemIndex <= 0) {
                    itemIndex = arr.length - 1;
                    return;
                }

                itemIndex--;
            }

            function setItem() {
                arr.forEach(el => {
                    el.style.display = 'none';
                });
                arr[itemIndex].style.display = 'block';
                imageName.innerText = itemsName[itemIndex].name;
            }