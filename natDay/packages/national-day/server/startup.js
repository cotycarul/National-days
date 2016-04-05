Meteor.startup(function () {
    var dateCreator = function (date) {
        return moment(date, 'DD/MM/YYYY').toDate();
    };
    if (NationalDaysDB.find().count() === 0) {
        NationalDaysDB.insert([
            {
                name: 'Anul Nou',
                date: dateCreator('1/1/2016')
            },
            {
                name: 'Ziua Unirii Principatelor Române (Ziua Unirii)',
                date: dateCreator('24/1/2016')
            },
            {
                name: 'Paștele ortodox',
                date: dateCreator('1/5/2016')
            },
            {
                name: 'Ziua Muncii',
                date: dateCreator('27/3/2016')
            },
            {
                name: 'Rusaliile',
                date: dateCreator('19/6/2016')
            },
            {
                name: 'Adormirea Maicii Domnului',
                date: dateCreator('15/9/2016')
            },
            {
                name: 'Sfântul Apostol Andrei cel Întâi chemat, Ocrotitorul României',
                date: dateCreator('30/10/2016')
            },
            {
                name: 'Ziua Națională (Ziua Marii Uniri)',
                date: dateCreator('1/12/2016')
            },
            {
                name: 'Crăciunul',
                date: dateCreator('25/12/2016')
            }
        ])
    }
});