import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { withStyles } from '@material-ui/core/styles';


const styles = () => {
    return {

    }
}



class FAQ extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="container my-5">
                <h3 style={{ textAlign: "center" }}>FAQ</h3>
                <div><h4>Coil dùng để làm gì?</h4>
                    <p><img style={{ float: "none", width: "15%", height: "15%", marginRight: "10px" }} src="https://bizweb.dktcdn.net/thumb/grande/100/278/585/products/claptoncoil-761.jpg?v=1514657079853" />
                        Coil là một đoạn dây kim loại dẫn điện được quấn như lò xo, là một thành phần chính để tạo nhiệt. Chất liệu thường sẽ là Kanthal, Nichrome, Titanium.</p>
                    <p>Đây là một phần cơ bản và quan trọng không thể thiếu để vape và quyết định khói và vị, bạn có thể tự build hoặc mua sẵn từ các nhà sản xuất (coil dùng một lần hoặc có thể build lại).</p>
                    <p>Rebuildable: có thể build lại</p>
                    <p>Replacement: coil dùng một lần</p></div>

                <div><h4>Ejuice là gì?</h4>
                    <p><img style={{ float: "none", width: "15%", height: "15%", marginRight: "10px" }} src="https://image.made-in-china.com/2f0j00DfEUvZHIJBbh/Salt-Nicotine-Solution-E-Juice-for-Pods-System-Ecig.jpg" />
                        Là chất được chuyển hóa thành hơi để hút. Gồm 4 thành phần VG, PG, hương liệu và Nicotine.</p></div>

                <h4>Tại sao trong coil lại có bông?</h4>
                <p>Nhiệm vụ của coil là tạo nhiệt từ đó chuyển hóa tinh dầu thấm trong bông để bạn có thể cảm nhậm được hương vị yêu thích của mình.</p>

                <h4>Để vape cần có những gì?</h4>
                <p>Một thiết bị vape với đầy đủ các bộ phận sau: Thân máy, atomizer hay còn gọi là đầu đốt đã có coil và wick bông, pin, tinh dầu.</p>

                <h4>Có thể để tinh dầu qua đêm không?</h4>
                <p>Bạn có thể để tinh dầu trong đầu đốt qua đêm nhưng nên tránh để hở vì tinh dầu sẽ bị oxy hóa và sẽ chuyển màu đồng thời mất đi hương vị đặc trưng của nó.</p>

                <h4>Leak tinh dầu/chảy tinh dầu ra ngoài.</h4>
                <p>Hiện tượng này có nhiều nguyên nhân nhưng thường là do coil của bạn đã đến lúc phải thay hoặc wick bông quá mỏng. Nếu đầu đốt của bạn sử dụng coil của các nhà sản xuất bạn nên thay hoặc nếu không bạn nên đến các cửa hàng vape uy tín để build lại coil, thay bông và kiểm tra.</p>

                <h4>Short atomizer/no atomizer/99,99 ohm.</h4>
                <p>Đây là hiện tượng máy không nhận đầu đốt. Trong trường hợp này bạn nên xem lại chân tiếp xúc, lau sạch rồi lắp lại, nếu máy vẫn hiện lên như trên thì bạn cần mang qua các cửa hàng vape để kiểm tra.</p>

                <h4>Tại sao hút bị khé cổ?</h4>
                <p>Trước hết bạn cần chọn đúng mức độ nicotine phù hợp, nồng độ nicotine quá cao cũng là một nguyên nhân gây ra hiện tượng khé cổ. Ngoài ra, nguyên nhân chủ yếu gây ra cảm giác này là do cháy coil hoặc bông và việc bạn bạn cần là đổi coil và bông mới.</p>

                <h4>Vape có mất nhiều juice không?</h4>
                <p>Tùy vào nhu cầu, mục đích sử dụng và đầu đốt bạn đang dung mà lượng ejuice sẽ tiêu tốn ở mức độ khác nhau. Đối với những ai không nghiện nicotine 1 lọ 30ml sẽ dung trong vòng hơn 1 tuần. Đối với những vaper có nhu cầu nicotine cao 1 lọ 30ml sẽ dung trong khoảng thời gian là 4 đến 5 ngày.</p>

                <h4>Làm sao để phân biệt hàng thật và hang giả?</h4>
                <p>Shop cam kết bàn 100% sản phẩm chính hãng.</p>
                <p>Mỗi sản phẩm để có code để khách hàng có thể check qua internet song có một vài sản phẩm nhà sản xuất chưa update trên mạng nên khách hàng có thể kiểm tra code không ra, trong trường hợp này chúng tôi có thể cho bạn xem hóa đơn mua hang để đảm bảo các sản phẩm bán tại ShopVape là hàng authentic.</p>

                <h4>Một thiết bị vape hoạt động như thế nào?</h4>
                <p>Một thiết bị vape hoàn chỉnh gồm đầu đốt, thân máy, pin. Khi máy được kích hoạt, năng lượng từ pin sẽ chuyển đến đầu đốt làm nóng coil ở bên trong nó và chuyển hóa tinh dầu thành hơi.</p>

                <h4>Tại sao tôi nên vape?</h4>
                <p>Vape là một sự lựa chọn hoàn hảo thay thế thuốc lá. Đếnvới vape bạn sẽ không lo gặp phải các vấn đề về sức khỏe như hôi miệng, ung thư,…hoặc ảnh hưởng đến không khí của những người xung quanh. Bên cạnh vấn đề sức khỏe, vape còn đem đến một bộ môn giải trí vô cùng hấp dẫn.</p>

                <h4>Tôi có thể vape ở đâu?</h4>
                <p>Vape phù hợp với hầu hết mọi không gian bởi nó không có mùi khét khó chịu như thuốc lá, song bạn vẫn nên chú ý không vape quá nhều ở những nơi công cộng vì như vậy có thể gây ra sự khó chịu với những người xung quanh.</p>
                <p>Tuy nhiên khi đi du lịch nước ngoài, các vaper nên chú ý tìm hiểu trước địa điểm mà các bạn sẽ đặt chân đến xem ở đó có quy định hay luật gì đối với vape hay không. Một số quốc gia trên thế giới có luật dành cho vape khá nghiêm ngặt thậm chí là xếp chúng ngang cấp độ với ma túy.</p>

                <h4>Tôi có thể tiết kiệm hơn khi vape thay thuốc lá không?</h4>
                <p>Chi phí cho một bộ thiết bị đầy đủ để bạn có thể vape chắc chắn sẽ đắt hơn thuốc lá nhưng nó lại đảm bảo thời gian sử dụng lâu và bền nếu người dung sử dụng và bảo quản đúng cách. Hơn nữa, bạn sẽ giảm bớt đi một khoản chi phí chăm sóc sức khỏe bởi vape không hề độc hại và gây tổn thương đến bất kì bộ phận nào trên cơ thể con người.</p>

                <h4>Short atomizer/no atomizer/99,99 ohm.</h4>
                <p>Đây là hiện tượng máy không nhận đầu đốt. Trong trường hợp này bạn nên xem lại chân tiếp xúc, lau sạch rồi lắp lại, nếu máy vẫn hiện lên như trên thì bạn cần mang qua các cửa hàng vape để kiểm tra.</p>

                <h4>VG là gì? PG là gì?</h4>
                <p>VG là: Vegetable Glycerin hay Glycol chúng ta gọi tắt là VG. Đây là một hỗn hợp gồm chất hữu cơ cacbon, hydro và oxy. VG là chất lỏng không độc, nhớt, không mùi, không màu, ngọt, thường được dùng làm hương liệu cho các loại mỹ phẩm, thực phẩm hoặc là kem.</p>
                <p>VG có thể được chiết xuất trực tiếp từ dầu thực vật, thường là dầu dừa hoặc dầu cọ bằng cách làm nóng ở nhiệt độ cao với nước sau đó là chưng cất để làm sạch. Nhà sản xuất e-liquid thường sử dụng USP Glycerin trong đó 99,7% là nguyên chất và 0,3% nước. Đây là một thành phần khá quan trọng trong một lọ juice, và đối với vaper thì đây lại là một thành phần không thể thiếu góp phần tạo khói.</p>
                <p>PG là : PG là một chất để làm loãng độ đặc của VG, hai chất này luôn đi với nhau giúp tinh dầu dễ dàng thẩm thấu vào bông, các clearomizer và bấc dễ dàng hoạt động để bạn vape. Nó còn tạo ra một loại cảm giác giống như bạn đang hút thuốc, điều này giúp ích khá nhiều cho những người đang từ bỏ thuốc lá.</p>

                <h4>Tôi nên mua ejuice với nồng độ nicotine như thế nào? Mức nicotine bao nhiêu là an toàn ?</h4>
                <p>Mỗi chai ejuice đều có mức độ nicotine nhất định như 0, 3, 6,…tùy vào nhu cầu và mục đích sử dụng mà bạn sẽ chọn cho mình mức độ nicotine phù hợp. Nồng độ nicotine không ảnh hưởng đến hương vị của ejuice. Nếu như bạn chọn vape để cai thuốc, mức nicotine ban đầu bạn chọn có thể bằng mức nicotine của loại thuốc lá bạn đã sử dụng trước đó sau đó giảm dần nồng độ nicotine đi hoặc có thể chọn một mức nicotine thấp hơn mức ban đầu cũng có thể được. Lưu ý, để có những trải nghiệm tốt nhất khi vape, bạn nên chọn mức nicotine phù hợp bởi nếu mức nicotine quá cao sẽ gây ra cá chiện tượng như khé cổ,…hoặc quá thấp bạn sẽ không có được cảm giác như mong muốn. Đối với những người tìm đến vape nhằm mục đích giải trí cũng không cần lo ngại về nicotine bởi sẽ không thiếu các ejuice 0 nicitne cho các bạn lựa chọn.</p>
                <p>Lượng nicotne chưa trong mỗi chai e-liquid không gây ra mối nguy hại nào đến sức khỏe của người dùng, vì vậy bạn chỉ cần lựa chọn mức độ phù hợp với nhu cầu bản thân là ổn.</p>

                <h4>Tôi có thể mua ejuice có vị như thuốc lá hay cigar không?</h4>
                <p>Ngành công nghiệp vape hiện nay đã và đang phát triển rất lớn, các hãng ejuice trên thế giới không ngừng cho ra mắt các sản phẩm với đủ các hương vị như kẹo, trái cây, các loại hạt, kem… vì vậy, bạn cũng có thể tìm được vị thuốc lá hoặc cigar. Một số ejuice như Fillmore hay presidio của Frisco Vapor khá nổi tiếng với hương vị này.</p>

                <h4>Tôi có thể bỏ thuốc lá nếu vape không?</h4>
                <p>Bản chất của việc bạn nghiện thuốc lá là nghiện nicotine hoặc một số thói quen như cầm điếu thuốc trên tay,… vape hoàn toàn có thể thay thế thuốc lá bởi nó cũng có thể đem đến cho bạn những trải nghiệm đó. Đặc biệt hơn, vape đưa nicotine vào cơ thể con người qua tinh dầu được chuyển hóa thành hơi nước chứ không phải khói như thuốc lá, chính vì thế mà vape an toàn hơn thuốc lá rất nhiều. Chưa kể đến, khi vape người dùng có thể tùy chọn nồng độ nicotine cũng như hương vị mà họ yêu thích. Các thiết bị vape cũng khá nhỏ gọn, bạn có thể tiện lợi mang đi bất cứ nơi đâu mà không lo vướng bận. Vape hoàn toàn có thể giúp bạn từ bỏ thuốc lá.</p>

                <h4>Tôi nên chọn mua ejuice của hãng nào?</h4>
                <p>Hiện nay trên thế giới có khá nhiều hãng tinh dầu đến từ các nước khác nhau. Nhưng tinh dầu đến từ Mỹ vẫn được ưa chuộng hơn cả bởi không chỉ đảm bảo an toàn cho người dùng mà còn đa dạng về hương vị, mùi, thậm chí là mức nicotine cũng được pha chế ra nhiều cấp độ hơn…</p>
                <p>Lựa chọn hợp lí tiếp theo là juice Nga, thời điểm này thị trường tràn ngập các loại juice không rõ nguồn gốc và giá rẻ tới mức khó tin. Để yên tâm bạn có thêm một đầu juice khác để cân nhắc là juice Nga, các loại juice Nga hiện chưa hề bị làm giả, đồng thời mức giá bình quân cũng không nhỉnh hơn quá nhiều. Quan trọng nhất, chất lượng vẫn rất tuyệt vời.</p>

                <h4>Tôi nên nhìn vào những tiêu chí nào khi chọn một thiết bị vape?</h4>
                <p>Khi muốn chọn 1 thiết bị vape, những điều cần quan tâm đầu tiên đó là: nhu cầu sử dụng, công suất của máy, tính năng bên trong, hiệu năng sử dụng và khả năng tài chính vốn có của bản thân. Các thiết bị vape được chia ra làm rất nhiều loại với nhiều mức giá khác nhau, vì vậy người dùng cần xác định rõ nhu cầu và khả năng tài chính của mình để có thể đưa ra lựa chọn phù hợp nhất cho mình. Bạn cũng nên tham khảo thông tin từ chính các kĩ thuật viên tại hệ thống vape shop lớn như The Vape Club để đưa ra lựa chọn phù hợp nhất với bản thân.</p>

                <h4>Các hãng sản xuất thiết bị nào nên tin dùng?</h4>
                <p>Hiện nay trên thế giới có rất nhiều các hãng sản xuất thiết bị nổi tiếng và đảm bảo chất lượng như Kangertech, Wismec, Pioneer4you, Vaporesso, Joytech... Đây là các hãng sản xuất các thiết bị mang tính đại trà với các sản phẩm chủ đạo như Topbox, Rx200, Ipvd3, Cuboid... được rất nhiều người tin tưởng sử dụng. </p>
                <p>Thế giới vape hiện rất đa dạng, các mẫu mã mới được ra mắt hàng ngày. Bạn nên dành thời gian thảm khảo thông tin qua các kênh như group Vape Việt Nam, website The Vape Club, hoặc từ chính bạn bè, các vaper kì cựu trước khi đưa ra quyết định.</p>

            </div>
        )
    }
}

export default withStyles(styles)(FAQ);