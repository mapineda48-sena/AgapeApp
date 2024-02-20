import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DashboardController {

    @GetMapping("/cms/_/**/*.html")
    public String serveSpa() {
        return "forward:/cms/_/dashboard/index.html";
    }
}
