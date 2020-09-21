
<? include '../header.php' ?>

    <div class="inner-page">
        <div class="wrapper-section">
            <div class="contact-us type-2 white">
                <div class="container">
                    <div class="col text-col">
                        <div class="title">Обратитесь к нам сегодня!</div>
                        <div class="text">Напишите нам и мы с вами свяжемся!</div>
                    </div>
                    <div class="col form-col">
                        <form action="">
                            <div class="input-wrapper">
                                <div class="custom-input">
                                    <input type="text" name="name-input" id="name-input">
                                    <label for="name-input">Вас зовут</label>
                                </div>
                                <div class="error-message">Error message</div>
                            </div>
                            <div class="input-wrapper">
                                <div class="custom-input">
                                    <input type="text" name="company-input" id="company-input">
                                    <label for="company-input">Компания</label>
                                </div>
                                <div class="error-message">Error message</div>
                            </div>
                            <div class="input-wrapper">
                                <div class="custom-input">
                                    <input type="text" name="phone-input" id="phone-input">
                                    <label for="phone-input">Ваш телефон</label>
                                </div>
                                <div class="error-message">Error message</div>
                            </div>
                            <div class="input-wrapper">
                                <div class="custom-input">
                                    <input type="text" name="email-input" id="email-input">
                                    <label for="email-input">Ваша эл.почта</label>
                                </div>
                                <div class="error-message">Error message</div>
                            </div>
                            <div class="input-wrapper">
                                <div class="custom-input">
                                    <textarea name="text-input" id="text-input" cols="30" rows="5"></textarea>
                                    <label for="email-input">Ваше сообщение</label>
                                </div>
                            </div>
                            <div class="input-wrapper">
                                <div class="custom-file">
                                    <input type='file' class="file-input" id="upload" name='upload'>
                                    <label for="upload">прикрепить файл</label>
                                </div>
                            </div>


                            <div class="custom-checkbox ">
                                <input type="checkbox" value="Y" name="personal-data-input"
                                    class="custom-control-input" id="personal-data-input">
                                <label class="custom-control-label" for="personal-data-input">согласен на
                                    обработку
                                    персональных данных</label>
                            </div>
                            <button class="btn btn-primary btn-arrow">
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<? include '../footer.php' ?>