package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.Brand;
import hibernate.HibernateUtil;
import hibernate.Product;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Util;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

@MultipartConfig
@WebServlet(name = "SaveBrand", urlPatterns = {"/SaveBrand"})
public class SaveBrand extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String brand = request.getParameter("brand");

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("status", false);

        SessionFactory sf = HibernateUtil.getSessionFactory();
        Session s = sf.openSession();

        Criteria c1 = s.createCriteria(Brand.class);
        c1.add(Restrictions.eq("name", brand));
        List<Brand> brandList = c1.list();

        if (brand == null || brand.trim().isEmpty()) {
            responseObject.addProperty("message", "Please Enter Brand");
        } else if (!brandList.isEmpty()) {
            responseObject.addProperty("message", "Brand already exists");
        } else {
            Brand b = new Brand();
            b.setName(brand);

            s.save(b);
            s.beginTransaction().commit();
            s.close();
            responseObject.addProperty("status", true);
        }
        Gson gson = new Gson();
        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseObject));

    }
}
