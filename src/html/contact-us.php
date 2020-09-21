<? include '../header.php' ?>

    <div class="wrapper-section">
        <div class="contact-us">
            <div class="container">
                <div class="col text-col">
                    <div class="title">Обратитесь к нам сегодня!</div>
                    <div class="text">Мы подберём решение специально для вашего бизнеса</div>
                </div>
                <div class="col form-col">
                    <form action="">
                        <div class="input-wrapper">
                            <div class="custom-input">
                                <input type="text" name="name-input" id="name-input">
                                <label for="name-input">Имя</label>
                            </div>
                            <div class="error-message">Error message</div>
                         </div>
                        <div class="input-wrapper">
                            <div class="custom-input">
                                <input type="text" name="email-input" id="email-input">
                                <label for="email-input">Электронная почта</label>
                            </div>
                            <div class="error-message">Error message</div>
                        </div>
                        <div class="input-wrapper">
                            <div class="custom-input">
                                <input type="text" name="phone-input" id="phone-input">
                                <label for="phone-input">Мобильный телефон</label>
                            </div>
                            <div class="error-message">Error message</div>
                        </div>
                        <div class="custom-checkbox ">
                            <input type="checkbox" value="Y" name="personal-data-input" class="custom-control-input" id="personal-data-input">
                            <label class="custom-control-label" for="personal-data-input">согласен на обработку персональных данных</label>
                        </div>
                        <button class="btn btn-primary btn-arrow">
                            Отправить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<? include '../footer.php' ?>