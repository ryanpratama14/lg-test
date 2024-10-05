const DATA = {
  remainingTimeCurrentSession: "120 мин.",
  expiryDateSession: "14.12.2020, 20:24",
};

export default function ClientSession() {
  return (
    <section className="dashboard-box flex flex-col gap-6 row-span-2">
      <p className="uppercase">Информация о текущей сесии</p>
      <section className="flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <p>Осталось минут:</p>
          <b>{DATA.remainingTimeCurrentSession}</b>
        </section>
        <section className="flex items-center justify-between">
          <p>Сессия истекает:</p>
          <b>{DATA.expiryDateSession}</b>
        </section>
      </section>
    </section>
  );
}
